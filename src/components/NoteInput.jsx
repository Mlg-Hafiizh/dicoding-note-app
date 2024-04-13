import React from 'react';
import PropTypes from 'prop-types';
 
class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title: '',
            body: '',
        }
        
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
        
    onTitleChangeEventHandler(event) {
        const inputValue = event.target.value;
      
        if (inputValue.length <= 50) {
          this.setState({
            title: inputValue,
          });
        }
    }
    
    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }
    
    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        const { title, body } = this.state;
        const titleMaxLength = 50;
        const titleRemainingCharacters = titleMaxLength - title.length;
        
        return (
            <form className='note-input' onSubmit={this.onSubmitEventHandler}>
                <h2>Tambah Catatan</h2>
                <br />
                <div className='title-counter'>
                    <span>
                        Karakter tersisa: {titleRemainingCharacters}/{titleMaxLength}
                    </span>
                </div>
                <input type="text" placeholder="Tuliskan judulmu disini ... " onChange={this.onTitleChangeEventHandler} value={title} required/>
                <textarea name="" id="" rows="10" placeholder="Tuliskan catatanmu disini ... " onChange={this.onBodyChangeEventHandler} value={body} required></textarea>
                <button className='note-item__create' type="submit">Tambah</button>
            </form>
        )
    }
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired
};
 
export default NoteInput;