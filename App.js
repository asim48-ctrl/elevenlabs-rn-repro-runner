import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import '@elevenlabs/react-native';
import { Conversation } from '@elevenlabs/client';
import { MediaDeviceInput } from '@elevenlabs/client/dist/utils/input.js';
import { MediaDeviceOutput } from '@elevenlabs/client/dist/utils/output.js';

export default function App() {
  const [lines, setLines] = useState(['ready']);

  const append = (line) => {
    const entry = `${new Date().toISOString()} ${line}`;
    console.log(`[EL_REPRO] ${entry}`);
    setLines((current) => [...current, entry]);
  };

  const run = async (connectionType) => {
    append(`start ${connectionType}`);
    try {
      await Promise.race([
        Conversation.startSession({
          signedUrl: 'ws://127.0.0.1:8799/convai',
          connectionType,
          useWakeLock: false,
          onStatusChange: (event) => append(`${connectionType} status ${JSON.stringify(event)}`),
          onError: (message, error) => append(`${connectionType} onError ${message} ${error?.message ?? ''}`),
        }),
        new Promise((_, reject) => setTimeout(() => reject(new Error(`${connectionType} timed out`)), 12000)),
      ]);
      append(`${connectionType} unexpectedly started`);
    } catch (error) {
      append(`${connectionType} failed ${error?.message ?? String(error)}`);
      if (error?.stack) {
        append(`${connectionType} stack ${error.stack.split('\n').slice(0, 6).join(' | ')}`);
      }
    }
  };

  const runMediaPath = async () => {
    append('start direct media path');
    try {
      await Promise.all([
        MediaDeviceInput.create({
          sampleRate: 16000,
          format: 'pcm',
          preferHeadphonesForIosDevices: false,
        }),
        MediaDeviceOutput.create({
          sampleRate: 16000,
          format: 'pcm',
        }),
      ]);
      append('direct media path unexpectedly started');
    } catch (error) {
      append(`direct media path failed ${error?.message ?? String(error)}`);
      if (error?.stack) {
        append(`direct media path stack ${error.stack.split('\n').slice(0, 6).join(' | ')}`);
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      (async () => {
        await runMediaPath();
        await run('websocket');
        await run('webrtc');
      })();
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ElevenLabs RN published package repro</Text>
      <View style={styles.buttons}>
        <Button title="Start WebSocket" onPress={() => run('websocket')} />
        <Button title="Start WebRTC" onPress={() => run('webrtc')} />
        <Button title="Start Direct Media Path" onPress={runMediaPath} />
      </View>
      <ScrollView style={styles.log}>
        {lines.map((line, index) => (
          <Text key={`${index}-${line}`} style={styles.line}>{line}</Text>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontWeight: '700',
    marginBottom: 16,
  },
  buttons: {
    gap: 12,
    width: '100%',
    marginBottom: 16,
  },
  log: {
    alignSelf: 'stretch',
  },
  line: {
    fontFamily: 'monospace',
    fontSize: 11,
    marginBottom: 6,
  },
});
