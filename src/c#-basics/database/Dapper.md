# Dapper

## 什么是Dapper

> Dapper是`开源`、`轻量`、`对象关系映射（ORM）`库
>
> 1. 相比 [Entity Framework Core](https://www.learnentityframeworkcore.com/)等常见的对象关系映射库，要轻量的多、并且性能快速，接近于ADO.NET
> 2. 相比于ADO.NET提供，对象关系映射
> 3. 此外，对于异步和同步数据库查询、以及多查询批处理都支持、支持`参数化查询`、防止SQL注入攻击

这些工具仅执行成熟的对象关系映射器（例如 [Entity Framework Core](https://www.learnentityframeworkcore.com/)）功能的一部分，但与其他工具相比，Dapper 以其速度和简单的实现而闻名。下表提供了与 ORM 相比，您可以在 micro ORM 中找到的功能的一般概念：



### 对象关系映射

使用ADO.NET对于查询对象

```C#

var sql = "select * from products";
var products = new List<Product>();
using (var connection = new SqlConnection(connString))
{
    connection.Open();
    using (var command = new SqlCommand(sql, connection))
    {
        using (var reader = command.ExecuteReader())
        {
            var product = new Product
            {
                ProductId = reader.GetInt32(reader.GetOrdinal("ProductId")),
                ProductName = reader.GetString(reader.GetOrdinal("ProductName")),
                SupplierId = reader.GetInt32(reader.GetOrdinal("SupplierId")),
                CategoryId = reader.GetInt32(reader.GetOrdinal("CategoryId")),
                QuantityPerUnit = reader.GetString(reader.GetOrdinal("QuantityPerUnit")),
                UnitPrice = reader.GetDecimal(reader.GetOrdinal("UnitPrice")),
                UnitsInStock = reader.GetInt16(reader.GetOrdinal("UnitsInStock")),
                UnitsOnOrder = reader.GetInt16(reader.GetOrdinal("UnitsOnOrder")),
                ReorderLevel = reader.GetInt16(reader.GetOrdinal("ReorderLevel")),
                Discontinued = reader.GetBoolean(reader.GetOrdinal("Discontinued")),
                DiscontinuedDate = reader.GetDateTime(reader.GetOrdinal("DiscontinuedDate"))
            };
            products.Add(product);
        }
    }
}
```

而使用Dapper对查询对象进行封装

```C#
products = connection.Query<Product>(sql).ToList();
```



此处我们就可以看到ORM对象关系映射的作用。

> PS:当然这些功能其它 [Entity Framework Core](https://www.learnentityframeworkcore.com/)等常见的对象关系映射库也能实现
>
> 那么如何去选择库
>
> 

## 使用Dapper查询数据

在下面示例中，我们创建一个 SQL 查询字符串，然后使用 Query 方法执行它。



```C#
using (var connection = new SqlConnection(connectionString)) 
{     
    var sql = "SELECT * FROM Books WHERE Author = @authorName";     
	
    var books = connection.Query<Book>(sql, new { authorName = "John Smith" }).ToList(); 
}
```

Dapper 支持多种类型的结果集，例如;

- [Querying Scalar Values (ExecuteScalar)查询标量值 ]
- [Querying Single Rows (QuerySingle, QueryFirst)查询单行]
- [Querying Multiple Rows (Query)查询多行]
- [Querying Multiple Result (QueryMultiple)查询多个结果]
- [Querying Specific Columns查询特定列]

此外：还包括`存储过程`和`批量操作`的支持

Dapper 还允许您使用 `Async` 方法异步查询数据库，以帮助应用程序开发人员提高其应用程序的性能。方法如下：

- ExecuteScalarAsync
- QueryAsync
- QueryUnbufferedAsync
- QuerySingleAsync && QueryFirstAsync
- QueryMultipleAsync



```c#
using (var connection = new SqlConnection(connectionString)) 
{    
    var employees = await connection.QueryAsync<Employee>("SELECT * FROM Employee");
}
```

接下来，让我们看看具体的方法

### Query Scalar Values

Dapper 提供了两种方法来选择标量值及其异步对应物。

| Method 方法             | Description 描述                              |
| :---------------------- | :-------------------------------------------- |
| `ExecuteScalar`         | 将第一行的第一列作为`动态`类型返回            |
| `ExecuteScalar<T>`      | 返回第一行的第一列作为指定的 `T` 类型参数     |
| `ExecuteScalarAsync`    | 将第一行的第一列异步返回为`动态`类型          |
| `ExecuteScalarAsync<T>` | 异步返回第一行的第一列作为指定的 `T` 类型参数 |



```C#
using (var connection = new SqlConnection(connectionString))
{
    var sql = "SELECT COUNT(*) FROM Products";
    var count = connection.ExecuteScalar(sql);
	
    Console.WriteLine($"Total products: {count}");
}



using (var connection = new SqlConnection(connectionString))
{
    var sql = "SELECT COUNT(*) FROM Products";
    var count = connection.ExecuteScalar<int>(sql);
	
    Console.WriteLine($"Total products: {count}");
}



using (var connection = new SqlConnection(connectionString))
{
    var sql = "SELECT COUNT(*) FROM Products";
    var count = await connection.ExecuteScalarAsync(sql);
	
    Console.WriteLine($"Total products: {count}");
}


using (var connection = new SqlConnection(connectionString))
{
    var sql = "SELECT COUNT(*) FROM Products";
    var count = await connection.ExecuteScalarAsync<int>(sql);
	
    Console.WriteLine($"Total products: {count}");
}
```



### Querying Single Row

