# APK action

A GitHub action for build a signed, release-ready APK.

> Based on [victorbnl/build-signed-apk](https://github.com/victorbnl/build-signed-apk)

## Inputs

| name              | description                                                 | required              |
| ----------------- | ----------------------------------------------------------- | --------------------- |
| keystore          | The content of the keystore file (.jks), encoded in base64. | true                  |
| keystore-password | The password of your keystore                               | true                  |
| key-alias         | Your key’s alias                                            | true                  |
| key-password      | Your key’s password                                         | true                  |
| java-version      | The Java version to set up                                  | false (`17`)          |
| gradle-args       | The arguments passed to Gradle                              | false (`--no-daemon`) |

## Example

```yml
- name: APK
  uses: waterlemons2k/apk-action@main
  with:
    keystore: ${{ secrets.KEYSTORE }}
    keystore-password: ${{ secrets.KEYSTORE_PASSWORD }}
    key-alias: ${{ secrets.KEY_ALIAS }}
    key-password: ${{ secrets.KEY_PASSWORD }}
```

## The APK

Default location of the APK: `app/build/outputs/apk/release/app-release.apk`.

### Follow-up

You can do whatever you want with the APK, such as release it:

```yml
- uses: softprops/action-gh-release@v1
  with:
    files: app/build/outputs/apk/release
```

or upload it as an artifact:

```yml
- uses: actions/upload-artifact@v3
  with:
    name: APK
    path: app/build/outputs/apk/release
```

Enjoy it!
