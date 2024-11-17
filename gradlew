#!/bin/sh

# Gradle 1.0 start up script for POSIX

CLASSPATH=gradle/wrapper/gradle-wrapper.jar
JAVACMD="$JAVA_HOME/bin/java"
if [ ! -x "$JAVACMD" ]; then
    echo "
ERROR: JAVA_HOME is set to an invalid directory: $JAVA_HOME

Please set the JAVA_HOME variable in your environment to match the
location of your Java installation.
" >&2
    exit 1
fi

exec $JAVACMD -cp $CLASSPATH org.gradle.wrapper.GradleWrapperMain "$@"
