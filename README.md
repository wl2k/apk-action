# APK action

Build a signed, release-ready APK with GitHub Actions.

> Based on [victorbnl/build-signed-apk](https://github.com/victorbnl/build-signed-apk)

## Example

```yml
- name: APK
  uses: WaterLemons2k/apk-action@main
  with:
    keystore: ${{ secrets.KEYSTORE }}
    keystore-password: ${{ secrets.KEYSTORE_PASSWORD }}
    key-alias: ${{ secrets.KEY_ALIAS }}
    key-password: ${{ secrets.KEY_PASSWORD }}
```

## Inputs

| name              | description                                          | required              |
| ----------------- | ---------------------------------------------------- | --------------------- |
| keystore          | Contents of the keystore file (.jks), base64 encoded | true                  |
| keystore-password | Password of the keystore                             | true                  |
| key-alias         | Alias of the key                                     | true                  |
| key-password      | Password of the key                                  | true                  |
| java-version      | The Java version to set up                           | false (`17`)          |
| gradle-args       | The arguments passed to Gradle                       | false (`--no-daemon`) |

## The APK

Default location of the APK: `app/build/outputs/apk/release/app-release.apk`.

### Follow-up

Now you can do whatever you want with the APK, such as release it:

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
