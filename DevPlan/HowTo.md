# How to Change Key Mappings

To change the key mappings for the game controls, you need to edit the `ManagedDoom/Config.cs` file. This file contains the default key bindings for all player actions.

## Steps to Change Key Mappings

1.  **Open the configuration file**: Navigate to and open `c:\Projects\MangedDoom-Blazor\ManagedDoom\Config.cs`.

2.  **Locate the default bindings**: Inside the `Config.cs` file, find the `Config()` constructor. This is where the default key bindings are initialized.

    ```csharp
    public Config()
    {
        key_forward = new KeyBinding(
            new DoomKey[]
            {
                DoomKey.Up,
                DoomKey.W
            });
        // ... other key bindings
    }
    ```

3.  **Identify the action to change**: Find the variable corresponding to the action you want to re-map. For example, to change the strafe keys, you would look for `key_strafeleft` and `key_straferight`.

4.  **Modify the key**: Change the `DoomKey` enum value to the desired new key. You can find a complete list of available keys in `ManagedDoom/UserInput/DoomKey.cs`.

### Example: Changing Strafe Keys

To change the "Strafe Left" and "Strafe Right" keys from "A" and "D" to "<" (comma) and ">" (period), you would modify the following lines:

**Original Code:**
```csharp
// ...
key_strafeleft = new KeyBinding(
    new DoomKey[]
    {
        DoomKey.A
    });
key_straferight = new KeyBinding(
    new DoomKey[]
    {
        DoomKey.D
    });
// ...
```

**Modified Code:**
```csharp
// ...
key_strafeleft = new KeyBinding(
    new DoomKey[]
    {
        DoomKey.Comma
    });
key_straferight = new KeyBinding(
    new DoomKey[]
    {
        DoomKey.Period
    });
// ...
```

**After making the changes, save the file and rebuild the project for the new key mappings to take effect.**
