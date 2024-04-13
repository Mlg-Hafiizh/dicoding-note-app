import React from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { 
    getAllNotes,
    getNote, 
    deleteNote, 
    archiveNote,
    unarchiveNote
} from '../utils/local-data';

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }
    
    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component {
    static propTypes = {
        defaultKeyword: PropTypes.string,
        keywordChange: PropTypes.func.isRequired
    };
    
    constructor(props) {
        super(props);
        
        this.state = {
            notes: getAllNotes(),
            keyword: props.defaultKeyword || '',
        }
        
        this.onArchieveHandler = this.onArchieveHandler.bind(this);
        this.onUnArchieveHandler = this.onUnArchieveHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }
    
    onArchieveHandler(id) {
        archiveNote(id);
        this.setState(() => {
            return {
                notes: getAllNotes(),
            }
        });
    }

    onUnArchieveHandler(id) {
        unarchiveNote(id);
        this.setState(() => {
            return {
                notes: getAllNotes(),
            }
        });
    }
    
    onDeleteHandler(id) {
        deleteNote(id);

        this.setState(() => {
            return {
                notes: getAllNotes(),
            }
        });
    }

    onDetailHandler(id) {
        getNote(id);
        
        this.setState(() => {
            return {
                notes: getNote(),
            }
        });
    }
    
    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            }
        });
        
        this.props.keywordChange(keyword);
    }
    
    render() {
        const notes = this.state.notes.filter((notes) => {
            return notes.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            );
        });
            
        return (
            <section>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                <br /><br /><br />
                <NoteList 
                    notes={notes} 
                    onDelete={this.onDeleteHandler} 
                    onArchieve={this.onArchieveHandler} 
                    onDetail={this.onDetailHandler}
                    onUnArchieve={this.onUnArchieveHandler}
                />
            </section>
            )
        }
    }
    
    export default HomePageWrapper;