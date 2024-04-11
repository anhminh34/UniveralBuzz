ThisBuild / scalaVersion := "2.13.13"

ThisBuild / version := "1.0-SNAPSHOT"

lazy val root = (project in file("."))
  .enablePlugins(PlayJava)
  .settings(
    name := """universalbuzz""",
    libraryDependencies ++= Seq(
      guice
    )
  )