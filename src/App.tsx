import './App.css'
import { AppLayout } from './shared/components/organisms';
import { TasksProvider } from './shared/context';

export default function App() {
  return (
    <TasksProvider>
      <AppLayout />
    </TasksProvider>
  );
}