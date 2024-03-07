# sn-lte-dev-helper

Source code for "Lenny's Dev Helper" ServiceNow Application *([x_922204_lte_dhlp](https://github.com/erwinel/x_922204_lte_dhlp))*

## Submodule for sn_typings_server_scoped

The `types/snc` folder contains TypeScript definitions that are referenced by files in the `src` folder.

If the `types/snc` folder is empty after checking out this repository, you will need to run the following git commands to pull content from the [sn_typings_server_scoped](https://github.com/erwinel/sn_typings_server_scoped) repository:

```bash
git submodule init
git submodule update
```
