import { useState, useEffect } from "react"
import { getActiveNotes, getArchivedNotes, deleteNote, archiveNote, unarchiveNote } from "../utils/api"

export default function useNotes(type = "active") {
  const [notes, setNotes] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [loading, setLoading] = useState(true)

  const noteType = {
    active: getActiveNotes,
    archived: getArchivedNotes,
  }

  const getNotes = noteType[type]

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getNotes()
      if (loading) setLoading(false)
      setNotes(data)
    }

    fetchData()
    if (refresh) {
      setRefresh(false)
    }
  }, [refresh])

  const deleteNoteHandler = async (id) => {
    await deleteNote(id)
    setRefresh(true)
  }

  const archiveNoteHandler = async (id) => {
    await archiveNote(id)
    setRefresh(true)
  }

  const unarchiveNoteHandler = async (id) => {
    await unarchiveNote(id)
    setRefresh(true)
  }

  return {
    notes,
    loading,
    deleteNoteHandler,
    archiveNoteHandler,
    unarchiveNoteHandler,
  }
}
