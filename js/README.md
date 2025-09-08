# Keycloak JavaScript

This directory contains the UIs and related libraries of the Keycloak project written in JavaScript (and TypeScript).

// "packageManager": "pnpm@10.14.0+sha512.ad27a79641b49c3e481a16a805baa71817a04bbe06a38d17e60e2eaee83f6a146c6a688125f5792e48dd5ba30e7da52a5cda4c3992b9ccf333f9ce223af84748",
## Directory structure

    ├── apps
    │   ├── account-ui                 # Account UI for account management i.e controlling password and account access, tracking and managing permissions
    │   ├── admin-ui                   # Admin UI for handling login, registration, administration, and account management
    │   └── keycloak-server            # Keycloak server for local development of UIs
    ├── libs
    │   ├── ui-shared                  # Shared component library between admin and account
    │   └── keycloak-admin-client      # Keycloak Admin Client library for Keycloak REST API
    ├── ...

## Data processing

Red Hat may process information including business contact information and code contributions as part of its participation in the project, data is processed in accordance with [Red Hat Privacy Statement](https://www.redhat.com/en/about/privacy-policy).

To speed up the build process, the following build flag can be used to disable the processing of these modules:

    -Dskip.npm

## Contributing

If you want to contribute please look at the [coding guidelines](CODING_GUIDELINES.md)

// 启动服务端脚本  pnpm start --admin-dev
// 启动前端脚本  pnpm dev