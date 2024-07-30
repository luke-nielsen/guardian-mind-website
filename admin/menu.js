const secretKey = "j}uu}|!rS'S:,P1PW#aFZhGS8oIB54";

function decryptData(encryptedData, secretKey) {
    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}

function loadTodo()
{
    window.location.href = "todo.html";
}

function exportContacts() 
{
    const link = document.createElement("a");
    
    const jsonContacts = decryptData(localStorage.getItem("contacts"), secretKey);
    let contentArray = [];
    if(jsonContacts[0])
    {
        jsonContacts.forEach(contact => {
            contentArray.push(`${contact.name},${contact.email}`);
        });
        const content = contentArray.join('\n');
    
        // Create a Blob with the content
        const blob = new Blob([content], { type: 'text/plain' });
        
        // Create a URL for the Blob
        const url = URL.createObjectURL(blob);
    
        // Create a download link
        const a = document.createElement('a');
        a.href = url;
        a.download = 'contacts.txt';
    
        // Append the link to the body (required for Firefox)
        document.body.appendChild(a);
    
        // Programmatically click the download link
        a.click();
    
        // Remove the link from the document
        document.body.removeChild(a);
    
        // Revoke the URL to free up resources
        URL.revokeObjectURL(url);
    }
    else
    {
        alert(`No contacts to download!`);
    }
}

function clearContacts()
{
    let jsonContacts = [];
    localStorage.setItem("contacts", JSON.stringify(jsonContacts));
}