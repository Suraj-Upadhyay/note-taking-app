const API_URL = "http://localhost:3031/posts";

export const fetchNotesList = async () => {
    return await fetch(API_URL + '/list')
                 .then(response => {
                    if (response.ok) return response.json();
                    else throw response;
                 })
                 .then( response => response.data)
                 .catch(err => console.log(err));
};

export const insertNewNote = async (newNote) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newNote)
    };
    return await fetch(API_URL, requestOptions)
                 .then(response => {
                    if (response.ok) return response.json();
                    else throw response;
                 })
                 .then(async response => {
                    return await fetchNotesList();
                 })
                 .catch(e => console.log(e));
};

export const updateNote = async (noteId, updatedNote) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedNote)
    };
    return await fetch(API_URL + '/' + noteId, requestOptions)
                 .then(response => {
                    if (response.ok) return response.json();
                    else throw response;
                 })
                 .then(async response => {
                    return await fetchNotesList();
                 })
                 .catch(e => console.log(e));
};

export const removeNote = async (noteId) => {
    const requestOptions = {
        method: 'DEL',
        headers: { 'Content-Type': 'application/json' }
    };
    return await fetch(API_URL + '/' + noteId, requestOptions)
                 .then(response => {
                    if (response.ok) return response.json();
                    else throw response;
                 })
                 .then(async response => {
                    return await fetchNotesList();
                 })
                 .catch(e => console.log(e));
};
