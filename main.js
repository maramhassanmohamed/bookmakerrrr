var bookmarks = []; 
document.getElementById("submitBtn").addEventListener("click", function () {
  var nameInput = document.getElementById("bookmarkName").value.trim(); 
  var urlInput = document.getElementById("bookmarkURL").value.trim();   
  if (nameInput === "" || urlInput === "") {
    alert("Please fill in both fields!"); 
    return; 
  } 

  if (!isValidURL(urlInput )) {
    alert("Please enter a valid URL!"); 
    return;
  }
  bookmarks.push({
    name: nameInput,
    url: urlInput    
  });

  displayBookmarks(); 
  clearInputs();   
  
  
});
function displayBookmarks() {
  var tableBody = document.getElementById("tableBody"); 
  tableBody.innerHTML = "";
  bookmarks.forEach(function(bookmark, index) {
    tableBody.innerHTML += `
      <tr>
        <td>${index + 1}</td> 
        <td>${bookmark.name}</td> 
        <td><a class="btn btn-success" href="${bookmark.url}" target="_blank">Visit</a></td> 
        <td><button onclick="deleteBookmark(${index})" class="btn btn-danger">Delete</button></td> 
      </tr>
    `;
  });
 }
function clearInputs() {
  document.getElementById("bookmarkName").value = ""; 
  document.getElementById("bookmarkURL").value = "";  
}
function deleteBookmark(index) {
  bookmarks.splice(index, 1); 
  displayBookmarks();        
}
function isValidURL(url) {
  try {
    new URL(url); 
    return true;
  } catch {
    return false; 
  }
}