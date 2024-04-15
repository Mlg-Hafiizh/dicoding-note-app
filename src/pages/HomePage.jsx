import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import NoteList from "../components/NoteList"
import SearchBar from "../components/SearchBar"
import useNotes from "../hooks/useNotes"

export default function NotePage() {
  const { notes, deleteNoteHandler, archiveNoteHandler} = useNotes("active");
  
  const [searchParams, setSearchParams] = useSearchParams()
  const [keyword, setKeyword] = useState(() => searchParams.get("keyword") || "")

  const keywordChange = (keyword) => {
    setKeyword(keyword)
    keyword ? setSearchParams({ keyword }) : setSearchParams({})
  }

  const noteToRender = notes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()));

  return (
    <>
      <SearchBar keyword={keyword} keywordChange={keywordChange} />
      <NoteList 
        notes={noteToRender} 
        typeNote="active"
        onDelete={deleteNoteHandler} 
        onArchive={archiveNoteHandler} 
      />
    </>
  )
}
