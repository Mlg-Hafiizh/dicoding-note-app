import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import NoteDetail from '../components/NoteDetail';
import { getNote } from "../utils/api"

function DetailPage() {
  const { id } = useParams()
  const [note, setNote] = useState({
    title: "",
    body: "",
    createdAt: "",
    archived: false,
  })

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getNote(id)
      setNote({
        title: data.title,
        body: data.body,
        createdAt: data.createdAt,
        archived: data.archived,
      })
    }

    fetchData()
  }, [])

  const { title, body, createdAt, archived } = note
  return <NoteDetail title={title} body={body} createdAt={createdAt} archived={archived} />
}


export default DetailPage;