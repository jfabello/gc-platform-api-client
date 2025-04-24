#!/bin/bash

#===============================================================================
# DESCRIPTION:   Shell script to launch the Generate Genesys Cloud Platform API
#                classes utility.
# AUTHOR:        Juan F. Abello (juan@jfabello.com)
# CREATED:       2025-01-11
# VERSION:       0.1.0
# LICENSE:       MIT License
#===============================================================================
# CHANGELOG:
# [0.1.0] - 2025-01-11 - Initial release.
#===============================================================================

# Get the directory where the script is located
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# Go to the directory where the utility is located
cd "$SCRIPT_DIR/generate-gc-platform-api-classes"

# Call the Generate Genesys Cloud Platform API classes utility
node ./generate-gc-platform-api-classes.js --clientclassdir ../../src --classesdir ../../src/classes --classesdocsdir ../../docs