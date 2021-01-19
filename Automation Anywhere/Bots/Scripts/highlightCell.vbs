Const xlMaximized = -4137
Dim XL
Dim Cell

Cell = WScript.Arguments(0)
Set XL = GetObject(,"Excel.Application")
XL.Windows(1).WindowState = xlMaximized
XL.Range(""&Cell&"").Interior.ColorIndex=3