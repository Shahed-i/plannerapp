import Note from './Note';
import NoteCreator from './NoteCreator';

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
    return (
        <div className='flex flex-wrap gap-6 ml-`'>
            <NoteCreator handleAddNote={handleAddNote} />
            {notes.map((note) => (
                <Note
                    key={note.id} 
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    handleDeleteNote={handleDeleteNote}
					color={note.color}
                />
            ))}
        </div>
    );
};

export default NotesList;
