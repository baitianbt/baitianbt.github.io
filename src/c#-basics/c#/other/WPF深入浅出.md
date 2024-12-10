# WPF深入浅出

---

## 什么是XAML

> 可扩展应用程序标记语言
>
> Extensible Application MarkUp Language

 什么是 XAML？

XAML（**Extensible Application Markup Language**）是一种基于 XML 的语言，专为描述用户界面而设计，用于构建 WPF 和其他 Microsoft 平台（如 UWP、Xamarin.Forms）的 UI。它允许以声明方式定义 UI 元素和行为，与后台代码结合实现复杂功能。

---

### 为什么需要 XAML？

#### 1. **声明式编程的需求**

传统的 UI 编程大多依赖手动构造对象和设置属性。例如，使用 WinForms 时，需要用 C# 来手动初始化控件、设置属性并组织布局。代码复杂且难以维护。

XAML 提供了声明式的语法，专注于描述界面本身：

- **降低复杂度**：UI 逻辑和显示分离。
- **可读性更高**：基于 XML 结构直观展示 UI 层级。

#### 2. **与 C# 分工明确**

通过 XAML 定义界面结构，而逻辑部分通过 C# 或其他代码实现：

- XAML 负责 "What to show"（展示内容）。
- C# 负责 "How to behave"（行为逻辑）。

#### 3. **简化开发流程**

- 开发者和设计师可以协作完成：设计师使用工具（如 Blend）生成 XAML，开发者专注于后台代码。
- 现代开发工具（如 Visual Studio）支持 XAML 可视化设计，实时预览 UI。

#### 4. **支持数据绑定**

XAML 能轻松支持数据绑定和 MVVM（Model-View-ViewModel）模式，为现代应用开发提供强大支持。

---

### XAML 的优点

#### 1. **简洁、直观**

- UI 层次清晰，基于 XML 的结构化语法简洁易读。
- 更适合复杂 UI 场景，通过嵌套描述层次结构。

#### 示例：层次结构

```xaml
<Grid>
    <StackPanel>
        <Button Content="Button 1"/>
        <Button Content="Button 2"/>
    </StackPanel>
</Grid>
```

与 C# 等价代码相比，XAML 更简单：

```C#
Grid grid = new Grid();
StackPanel panel = new StackPanel();
Button button1 = new Button { Content = "Button 1" };
Button button2 = new Button { Content = "Button 2" };
panel.Children.Add(button1);
panel.Children.Add(button2);
grid.Children.Add(panel);
```

---

#### 2. **支持丰富的功能**

XAML 的设计不仅限于静态界面，它还支持：

- **动画和视觉效果**：轻松实现动态 UI。
- **数据绑定**：将 UI 与后台数据模型关联。
- **样式与资源**：支持全局样式和资源的定义和复用。

#### 示例：样式和资源

```xaml
<Window.Resources>
    <Style x:Key="MyButtonStyle" TargetType="Button">
        <Setter Property="Background" Value="LightBlue"/>
        <Setter Property="FontSize" Value="16"/>
    </Style>
</Window.Resources>

<Button Style="{StaticResource MyButtonStyle}" Content="Styled Button"/>
```

---

#### 3. **与工具高度集成**

- **Blend for Visual Studio**：用于设计复杂界面和动画。
- **Visual Studio** 提供 XAML 编辑器，支持智能提示和实时预览。
- **XAML Designer**：所见即所得，降低调试 UI 的成本。

---

#### 4. **支持动态和响应式设计**

XAML 支持绑定动态数据和条件逻辑，使 UI 能根据数据或事件动态变化：

- 支持响应式布局（通过控件如 `Grid`, `StackPanel`）。
- 适用于多平台和多设备。

---

#### 5. **代码分离，易维护**

- **逻辑与表现分离**：界面在 XAML 文件中，业务逻辑在后台代码中。
- **模块化开发**：使用 XAML 的 `UserControl` 或模板定义复用组件。

#### 示例：分离的事件处理

XAML 文件：

```xaml


<Button Content="Click Me" Click="OnButtonClick"/>
```

C# 文件：

```c#
private void OnButtonClick(object sender, RoutedEventArgs e)
{
    MessageBox.Show("Button Clicked");
}
```

---

#### 6. **扩展性和复用性**

- **样式复用**：通过样式和模板，统一界面风格。
- **控件模板化**：支持自定义控件外观（ControlTemplate）。
- **支持资源字典**：将样式和资源集中管理。

---

### 总结

XAML 的核心优势在于其声明式、直观的界面定义方式，结合强大的功能支持，使得 WPF 开发变得高效且灵活。
如果你熟悉 HTML 或 XML，那么 XAML 学习起来将非常轻松。
接下来，如果你想进一步了解，我们可以深入探讨 XAML 的控件布局、绑定机制或动画系统！

## 什么是名称空间


## 控件与布局

---

## 什么是Binding

DataBinding 在 WPF 中的地位

一般情况下，应用程序会具有三层结构，

- 数据存储层，由数据库和文件系统构成
- 数据处理层，逻辑层，与业务逻辑相关，用于加工处理数据的算法
- 数据展示层，将加工后的数据通过可使的界面展示给用户，或通过其它接口展示给别的应用程序



程序的本质就是 **数据** 加 **算法** 

数据 会在 存储、逻辑、展示三层流通

算法 分布的场景

1. 数据库内部
2. 读取和写回数据
3. 业务逻辑
4. 数据展示
5. 界面与逻辑的交互

1，2 部分算法，一般不会轻易改动

3 与客户需求关系精密，大多数算法集中

4，5 负责UI与逻辑的交互，存在一定的算法



明显3处 是应用程序的核心

我们应该将算法主要集中在3处，但是UI与逻辑的交互紧密相关，导致我们将算法写到UI 4，5处；

这两个部分以消息和时间的方式与逻辑层沟通，一旦出现同一个数据多处展示、修改，用于同步的代码复杂度就回上升

问题的核心 在于 逻辑层 和展示层 的地位不固定，当我们确定用户需求时，此时逻辑层的处于中心地位，当我们实现UI交互的时候，展示层又处于中心地位。

WPF作为一种专门 的展示层技术，帮助我们将思维的中心固定在逻辑层，让展示层处于逻辑层的从属地位

这里的核心关键就是Data Binding 概念 以及与之配套的系统

> 展示层与逻辑层的桥梁-- Data Binding 
>
> 用户修改数据会自动传回逻辑层、逻辑层的数据处理完成也会自动传给展示层
>
> 用**数据驱动**程序的用户界面



引入Data Binding 将 4，5合二为一

使用Data Binding把UI元素与数据一一关联上，





### Bind基础

binding 绑定，作为数据桥梁 ，一端是逻辑层的对象，一端是UI层的控件对象

## 属性

## 事件

## 命令

---

## 资源

## 什么是模板

## 绘图和动画

