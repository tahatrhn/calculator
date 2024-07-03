import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hakkinda')({
  component: () => <div>Hello /hakkinda!</div>
})