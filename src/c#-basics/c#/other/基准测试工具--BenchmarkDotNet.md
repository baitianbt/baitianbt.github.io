# 基准测试工具--BenchmarkDotNet

> https://github.com/dotnet/BenchmarkDotNet
>
> 对方法进行基准测试、跟踪其性能
>
> 测量数据可以导出为不同的格式（md、html、csv、xml、json 等），包括绘图
>
> PS: BenchmarkDotNet 仅适用于控制台应用程序

## 支持的运行环境

*Supported runtimes:* .NET 5+, .NET Framework 4.6.1+, .NET Core 3.1+, Mono, NativeAOT
*支持的运行时：*.NET 5+、.NET Framework 4.6.1+、.NET Core 3.1+、Mono、NativeAOT
*Supported languages:* C#, F#, Visual Basic
*支持的语言：*C#、F#、Visual Basic
*Supported OS:* Windows, Linux, macOS
*支持的操作系统：*Windows、Linux、macOS
*Supported architectures:* x86, x64, ARM, ARM64, Wasm and LoongArch64
*支持的架构：*x86、x64、ARM、ARM64、Wasm 和 LoongArch64







## 示例

1. ### 创建





## 输出说明

### Summary

可以看到控制台输出中黄色部分加下方表格，就是该报告主要内容，能看到当前执行测试时的运行环境，测试条件（IterationCount=100000 RunStrategy=ColdStart），表格中也能看到具体性能，比如，

1. Method(测试方法的名称为CreateTuple)。
2. Mean（测试运行的平均时间为420.7纳秒）。
3. Error(测试运行的标准误差为16.96纳秒)。
4. StdDev(所有测试运行的标准偏差为1630纳秒)。
5. Median(所有测试运行的中位数为300纳秒)。

### Legends

简单描述了表格中的一些参数。

实际上在 `BenchmarkDotNet` 中，这样的统计数据列大概有90多条，可以[参考这里](https://github.com/dotnet/BenchmarkDotNet/blob/master/src/BenchmarkDotNet/Columns/Column.cs)(https://github.com/dotnet/BenchmarkDotNet/blob/master/src/BenchmarkDotNet/Columns/Column.cs)

下面挑出一些常用统计列，简单解释：

- Method: 测试方法的名称。
- Mean: 所有测试运行的平均时间。
- Error: 测试运行的标准误差，标准误差是测试结果的离散程度的度量，标准误差越小，表示测试结果越稳定。
- StdDev: 所有测试运行的标准偏差，标准偏差是测试结果的离散程度的度量，标准偏差越小，表示测试结果越接近平均值。
- Median: 所有测试运行的中位数。中位数是测试结果的中间值，如果测试结果的个数为奇数，则中位数为中间的那个值；如果测试结果的个数为偶数，则中位数为中间两个值的平均值。
- Ratio: 每个测试运行的平均时间与基准测试运行的平均时间的比值。基准测试是性能最好的测试，它的比值为 1.0。其他测试的比值表示它们相对于基准测试的性能表现，比值越小，表示性能越好。
- RatioSD: 所有测试运行的比值的标准偏差。标准偏差越小，表示比值的离散程度越小，测试结果更稳定。
- Gen 0: 所有测试运行期间生成的第 0 代垃圾回收的次数。垃圾回收是 .NET 运行时自动回收不再使用的内存的机制，Generational Garbage Collection 是 .NET 中的一种垃圾回收算法。
- Gen 1: 所有测试运行期间生成的第 1 代垃圾回收的次数。
- Gen 2: 所有测试运行期间生成的第 2 代垃圾回收的次数。
- Allocated: 所有测试运行期间分配的内存总量。

### Warings

会给出一些警告，或者建议操作，像示例代码中生成100000个 `Tuple` 对象，他就报警方法执行实现太短，建议使用更多操作将其增加到至少100.0000 ms。

### Export

上面其实还有一部分控制台内容是 **Export** 内容 ,如下图所示：