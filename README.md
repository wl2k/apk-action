# APK action

Build a signed, release-ready APK with GitHub Actions.

> Based on [victorbnl/build-signed-apk](https://github.com/victorbnl/build-signed-apk)

## Usage

```yml
- uses: WaterLemons2k/apk-action@v1
  with:
    # Contents of the keystore file (.jks), base64 encoded
    keystore: ${{ secrets.KEYSTORE }}
    # Password of the keystore
    keystore-password: ${{ secrets.KEYSTORE_PASSWORD }}
    # Alias of the key
    key-alias: ${{ secrets.KEY_ALIAS }}
    # Password of the key
    key-password: ${{ secrets.KEY_PASSWORD }}

    # Optioanl
    #
    # The Java version to set up
    # Default: see `action.yml`
    java-version: ''
    # The arguments passed to Gradle
    # Default: '--no-daemon'
    gradle-args: ''
```

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
