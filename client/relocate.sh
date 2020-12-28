#!/bin/bash

PUBLIC="../public"
BUILD="build"

if [ -d "$BUILD" ]; then
    mv -f $BUILD/* $PUBLIC && rm -rf "$BUILD"
    echo "Done!"
else
    echo "pleas run `npm run build` before this script"
fi

