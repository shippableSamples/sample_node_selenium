#!/bin/bash
mkdir -p selenium
cd selenium
curl "http://selenium-release.storage.googleapis.com/2.41/selenium-server-standalone-2.41.0.jar" -o "selenium-server-standalone-2.41.0.jar"
java -jar selenium-server-standalone-2.41.0.jar
