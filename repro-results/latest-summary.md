# ElevenLabs React Native iOS repro

- run_id: 25894684051
- commit: 3ee7df26a00f4eabadecd5c27ea0976b2deb1772
- date_utc: 2026-05-15T01:17:00Z

## Package versions
expo-repro@1.0.0 /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner
├── @elevenlabs/react-native@1.2.0
└── @livekit/react-native@2.9.8


## Metro excerpt
Starting project at /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner
Metro is running in CI mode, reloads are disabled. Remove CI=true to enable watch mode.
Starting Metro Bundler
warning: Bundler cache is empty, rebuilding (this may take a minute)
Waiting on http://localhost:8081
Logs for your project will appear below.
iOS ./index.js ░░░░░░░░░░░░░░░░  0.0% (0/1)
iOS ./index.js ░░░░░░░░░░░░░░░░  1.0% (1/4)
 WARN  Attempted to import the module "/Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/node_modules/@elevenlabs/client/dist/utils/input.js" which is not listed in the "exports" of "/Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/node_modules/@elevenlabs/client" under the requested subpath "./dist/utils/input.js". Falling back to file-based resolution. Consider updating the call site or asking the package maintainer(s) to expose this API.
 WARN  Attempted to import the module "/Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/node_modules/@elevenlabs/client/dist/utils/output.js" which is not listed in the "exports" of "/Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/node_modules/@elevenlabs/client" under the requested subpath "./dist/utils/output.js". Falling back to file-based resolution. Consider updating the call site or asking the package maintainer(s) to expose this API.
 WARN  The package /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/node_modules/@livekit/react-native contains an invalid package.json configuration. Consider raising this issue with the package maintainer(s).
Reason: The resolution for "/Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/node_modules/@livekit/react-native" defined in "exports" is /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/node_modules/@livekit/react-native/lib/commonjs/index, however this file does not exist. Falling back to file-based resolution.
iOS ./index.js ▓▓▓░░░░░░░░░░░░░ 20.5% ( 80/201)
iOS ./index.js ▓▓▓░░░░░░░░░░░░░ 20.5% (117/262)
iOS ./index.js ▓▓▓▓░░░░░░░░░░░░ 27.4% (159/325)
iOS ./index.js ▓▓▓▓▓░░░░░░░░░░░ 31.8% (213/378)
iOS ./index.js ▓▓▓▓▓▓░░░░░░░░░░ 42.7% (375/574)
iOS ./index.js ▓▓▓▓▓▓▓▓▓▓▓▓░░░░ 76.8% (599/686)
iOS ./index.js ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░ 99.9% (971/971)
iOS Bundled 28560ms index.js (971 modules)
 LOG  [EL_REPRO] 2026-05-15T01:16:01.842Z start direct media path
 LOG  [EL_REPRO] 2026-05-15T01:16:01.844Z direct media path failed navigator.mediaDevices.getSupportedConstraints is not a function (it is undefined)
 LOG  [EL_REPRO] 2026-05-15T01:16:01.844Z direct media path stack TypeError: navigator.mediaDevices.getSupportedConstraints is not a function (it is undefined) |     at ?anon_0_ (http://localhost:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&excludeSource=true&sourcePaths=url-server&app=com.anonymous.exporepro&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=1&unstable_transformProfile=hermes-stable:173876:94) |     at next (native) |     at asyncGeneratorStep (http://localhost:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&excludeSource=true&sourcePaths=url-server&app=com.anonymous.exporepro&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=1&unstable_transformProfile=hermes-stable:11736:19) |     at _next (http://localhost:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&excludeSource=true&sourcePaths=url-server&app=com.anonymous.exporepro&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=1&unstable_transformProfile=hermes-stable:11750:29) |     at anonymous (http://localhost:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&excludeSource=true&sourcePaths=url-server&app=com.anonymous.exporepro&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=1&unstable_transformProfile=hermes-stable:11755:14)
 LOG  [EL_REPRO] 2026-05-15T01:16:01.845Z start websocket
 LOG  [EL_REPRO] 2026-05-15T01:16:01.845Z websocket status {"status":"connecting"}

## Repro WebSocket excerpt
[REPRO_WS] listening ws://127.0.0.1:8799

## Simulator excerpt
getpwuid_r did not find a match for uid 501
Filtering the log data using "composedMessage CONTAINS "[EL_REPRO]" OR composedMessage CONTAINS "AudioContext" OR composedMessage CONTAINS "navigator.mediaDevices" OR composedMessage CONTAINS "document.createElement" OR composedMessage CONTAINS "window.removeEventListener""
Child process terminated with signal 15: Terminated
Launch status: 0

## App launch excerpt
com.anonymous.exporepro: 14273

## Native build tail
ReactNativeDependencies.framework/ReactNativeDependencies_folly.bundle/PrivacyInfo.xcprivacy
ReactNativeDependencies.framework/ReactNativeDependencies_folly.bundle/_CodeSignature/
ReactNativeDependencies.framework/ReactNativeDependencies_folly.bundle/_CodeSignature/CodeDirectory
ReactNativeDependencies.framework/ReactNativeDependencies_folly.bundle/_CodeSignature/CodeRequirements
ReactNativeDependencies.framework/ReactNativeDependencies_folly.bundle/_CodeSignature/CodeRequirements-1
ReactNativeDependencies.framework/ReactNativeDependencies_folly.bundle/_CodeSignature/CodeResources
ReactNativeDependencies.framework/ReactNativeDependencies_folly.bundle/_CodeSignature/CodeSignature
ReactNativeDependencies.framework/ReactNativeDependencies_glog.bundle/
ReactNativeDependencies.framework/ReactNativeDependencies_glog.bundle/Info.plist
ReactNativeDependencies.framework/ReactNativeDependencies_glog.bundle/PrivacyInfo.xcprivacy
ReactNativeDependencies.framework/ReactNativeDependencies_glog.bundle/_CodeSignature/
ReactNativeDependencies.framework/ReactNativeDependencies_glog.bundle/_CodeSignature/CodeDirectory
ReactNativeDependencies.framework/ReactNativeDependencies_glog.bundle/_CodeSignature/CodeRequirements
ReactNativeDependencies.framework/ReactNativeDependencies_glog.bundle/_CodeSignature/CodeRequirements-1
ReactNativeDependencies.framework/ReactNativeDependencies_glog.bundle/_CodeSignature/CodeResources
ReactNativeDependencies.framework/ReactNativeDependencies_glog.bundle/_CodeSignature/CodeSignature
ReactNativeDependencies.framework/_CodeSignature/
ReactNativeDependencies.framework/_CodeSignature/CodeResources

sent 7342575 bytes  received 596 bytes  88365475 bytes/sec
total size is 7336858  speedup is 1.00
Stripped /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Products/Debug-iphonesimulator/exporepro.app/Frameworks/ReactNativeDependencies.framework/ReactNativeDependencies of architectures: x86_64
rsync --delete -av --filter P .*.?????? --links --filter "- CVS/" --filter "- .svn/" --filter "- .git/" --filter "- .hg/" --filter "- Headers" --filter "- PrivateHeaders" --filter "- Modules" "/Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/WebRTC-SDK/WebRTC.framework" "/Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Products/Debug-iphonesimulator/exporepro.app/Frameworks"
Transfer starting: 4 files
WebRTC.framework/
WebRTC.framework/Info.plist
WebRTC.framework/PrivacyInfo.xcprivacy
WebRTC.framework/WebRTC

sent 27084294 bytes  received 92 bytes  89951464 bytes/sec
total size is 27080485  speedup is 1.00
Stripped /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Products/Debug-iphonesimulator/exporepro.app/Frameworks/WebRTC.framework/WebRTC of architectures: x86_64
rsync --delete -av --filter P .*.?????? --links --filter "- CVS/" --filter "- .svn/" --filter "- .git/" --filter "- .hg/" --filter "- Headers" --filter "- PrivateHeaders" --filter "- Modules" "/Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/hermes-engine/Pre-built/hermes.framework" "/Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Products/Debug-iphonesimulator/exporepro.app/Frameworks"
Transfer starting: 3 files
hermes.framework/
hermes.framework/Info.plist
hermes.framework/hermes

sent 13803626 bytes  received 70 bytes  64775673 bytes/sec
total size is 13801546  speedup is 1.00
Stripped /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Products/Debug-iphonesimulator/exporepro.app/Frameworks/hermes.framework/hermes of architectures: x86_64

ExtractAppIntentsMetadata (in target 'exporepro' from project 'exporepro')
    cd /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/ios
    /Applications/Xcode_16.4.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/appintentsmetadataprocessor --toolchain-dir /Applications/Xcode_16.4.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain --module-name exporepro --sdk-root /Applications/Xcode_16.4.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator18.5.sdk --xcode-version 16F6 --platform-family iOS --deployment-target 15.1 --bundle-identifier com.anonymous.exporepro --output /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Products/Debug-iphonesimulator/exporepro.app --target-triple arm64-apple-ios15.1-simulator --binary-file /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Products/Debug-iphonesimulator/exporepro.app/exporepro --dependency-file /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Intermediates.noindex/exporepro.build/Debug-iphonesimulator/exporepro.build/Objects-normal/arm64/exporepro_dependency_info.dat --stringsdata-file /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Intermediates.noindex/exporepro.build/Debug-iphonesimulator/exporepro.build/Objects-normal/arm64/ExtractedAppShortcutsMetadata.stringsdata --source-file-list /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Intermediates.noindex/exporepro.build/Debug-iphonesimulator/exporepro.build/Objects-normal/arm64/exporepro.SwiftFileList --metadata-file-list /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Intermediates.noindex/exporepro.build/Debug-iphonesimulator/exporepro.build/exporepro.DependencyMetadataFileList --static-metadata-file-list /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Intermediates.noindex/exporepro.build/Debug-iphonesimulator/exporepro.build/exporepro.DependencyStaticMetadataFileList --swift-const-vals-list /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Intermediates.noindex/exporepro.build/Debug-iphonesimulator/exporepro.build/Objects-normal/arm64/exporepro.SwiftConstValuesFileList --compile-time-extraction --deployment-aware-processing --validate-assistant-intents --no-app-shortcuts-localization
2026-05-15 01:13:19.533 appintentsmetadataprocessor[11493:37500] Starting appintentsmetadataprocessor export
2026-05-15 01:13:19.544 appintentsmetadataprocessor[11493:37500] warning: Metadata extraction skipped. No AppIntents.framework dependency found.

CopySwiftLibs /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Products/Debug-iphonesimulator/exporepro.app (in target 'exporepro' from project 'exporepro')
    cd /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/ios
    builtin-swiftStdLibTool --copy --verbose --scan-executable /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Products/Debug-iphonesimulator/exporepro.app/exporepro.debug.dylib --scan-folder /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Products/Debug-iphonesimulator/exporepro.app/Frameworks --scan-folder /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Products/Debug-iphonesimulator/exporepro.app/PlugIns --scan-folder /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Products/Debug-iphonesimulator/exporepro.app/SystemExtensions --scan-folder /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Products/Debug-iphonesimulator/exporepro.app/Extensions --platform iphonesimulator --toolchain /Applications/Xcode_16.4.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain --destination /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Products/Debug-iphonesimulator/exporepro.app/Frameworks --strip-bitcode --strip-bitcode-tool /Applications/Xcode_16.4.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/bitcode_strip --emit-dependency-info /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Intermediates.noindex/exporepro.build/Debug-iphonesimulator/exporepro.build/SwiftStdLibToolInputDependencies.dep --filter-for-swift-os
Ignoring --strip-bitcode because --sign was not passed

AppIntentsSSUTraining (in target 'exporepro' from project 'exporepro')
    cd /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/ios
    /Applications/Xcode_16.4.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/appintentsnltrainingprocessor --infoplist-path /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Products/Debug-iphonesimulator/exporepro.app/Info.plist --temp-dir-path /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Intermediates.noindex/exporepro.build/Debug-iphonesimulator/exporepro.build/ssu --bundle-id com.anonymous.exporepro --product-path /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Products/Debug-iphonesimulator/exporepro.app --extracted-metadata-path /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Products/Debug-iphonesimulator/exporepro.app/Metadata.appintents --metadata-file-list /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Intermediates.noindex/exporepro.build/Debug-iphonesimulator/exporepro.build/exporepro.DependencyMetadataFileList --archive-ssu-assets
2026-05-15 01:13:19.632 appintentsnltrainingprocessor[11497:37517] Parsing options for appintentsnltrainingprocessor
2026-05-15 01:13:19.638 appintentsnltrainingprocessor[11497:37517] No AppShortcuts found - Skipping.

RegisterExecutionPolicyException /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Products/Debug-iphonesimulator/exporepro.app (in target 'exporepro' from project 'exporepro')
    cd /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/ios
    builtin-RegisterExecutionPolicyException /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Products/Debug-iphonesimulator/exporepro.app

Validate /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Products/Debug-iphonesimulator/exporepro.app (in target 'exporepro' from project 'exporepro')
    cd /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/ios
    builtin-validationUtility /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Products/Debug-iphonesimulator/exporepro.app -infoplist-subpath Info.plist

Touch /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Products/Debug-iphonesimulator/exporepro.app (in target 'exporepro' from project 'exporepro')
    cd /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/ios
    /usr/bin/touch -c /Users/runner/work/elevenlabs-rn-repro-runner/elevenlabs-rn-repro-runner/build/Build/Products/Debug-iphonesimulator/exporepro.app

warning: Run script build phase '[CP-User] [Hermes] Replace Hermes for the right configuration, if needed' will be run during every build because it does not specify any outputs. To address this issue, either add output dependencies to the script phase, or configure it to run in every build by unchecking "Based on dependency analysis" in the script phase. (in target 'hermes-engine' from project 'Pods')
note: Run script build phase '[CP-User] [RNDeps] Replace React Native Dependencies for the right configuration, if needed' will be run during every build because the option to run the script phase "Based on dependency analysis" is unchecked. (in target 'ReactNativeDependencies' from project 'Pods')
note: Run script build phase '[CP-User] [RN]Check FBReactNativeSpec' will be run during every build because the option to run the script phase "Based on dependency analysis" is unchecked. (in target 'React-RCTFBReactNativeSpec' from project 'Pods')
note: Run script build phase '[CP-User] [RNDeps] Replace React Native Core for the right configuration, if needed' will be run during every build because the option to run the script phase "Based on dependency analysis" is unchecked. (in target 'React-Core-prebuilt' from project 'Pods')
note: Run script build phase '[Expo] Configure project' will be run during every build because the option to run the script phase "Based on dependency analysis" is unchecked. (in target 'exporepro' from project 'exporepro')
note: Run script build phase 'Bundle React Native code and images' will be run during every build because the option to run the script phase "Based on dependency analysis" is unchecked. (in target 'exporepro' from project 'exporepro')
note: Run script build phase '[CP-User] Generate app.config for prebuilt Constants.manifest' will be run during every build because the option to run the script phase "Based on dependency analysis" is unchecked. (in target 'EXConstants' from project 'Pods')
** BUILD SUCCEEDED **

