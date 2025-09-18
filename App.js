import TabNavigation from './src/navigation/TabNavigation';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#111827" />
      <TabNavigation />
    </>
  );
}