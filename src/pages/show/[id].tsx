import { TodoTemplate } from '@/components/templates/TodoTemplate'

export default function Show(props: any) {
  return <TodoTemplate />
}
export async function getServerSideProps() {
  return { props: undefined }
}
