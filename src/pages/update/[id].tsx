import { UpdateTodoTemplate } from '@/components/templates/UpdateTodoTemplate'

export default function Update(props: any) {
  return <UpdateTodoTemplate />
}

export async function getServerSideProps() {
  return { props: undefined }
}
