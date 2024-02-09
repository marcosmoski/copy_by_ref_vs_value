# :hammer: Copy by value :vs: Copy by reference

- `Explanation:`:
  - A copy by value, means that a value is passed and a copy of the variable is created, so if you change the value, the original var will remain with the same value, the change will affect only the copy.
  - It happens usually with primitivy types such as number, string, bool... 
 
  - A copy by reference means that a value is passed by reference, and all changes will affect the original object, because it has the reference or memory address pointing to the variable's location in memory.
  -  It happens usually with non-primitivy types such as objects and arrays.
