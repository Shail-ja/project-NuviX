import ProtectedRoute from '@/components/protectedRoute';

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <div>Your protected content</div>
    </ProtectedRoute>
  );
}