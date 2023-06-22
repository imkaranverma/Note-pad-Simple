const addnote = document.querySelector("#addbutton")
const main = document.querySelector("#main")

// const save = document.querySelector(".trash")



 

const savenotes = () => {
    // console.log("working");
    const notes = document.querySelectorAll(".note textarea")
    // console.log("working");
    const data=[];
    notes.forEach(
        (note) => {
            data.push(note.value);
        }
        )
        console.log(data);

        localStorage.setItem("notes" , JSON.stringify(data));
    }
    
    
    addnote.addEventListener(
        "click" , 
        function() {
            addingnote()
            // console.log("Clicked 1.1");
        }
        )
        console.log("Working")




        // (   
            window.onload = function(){
                // console.log("Working")
                const localnotes = JSON.parse(localStorage.getItem("notes"));
                console.log("Working")
                console.log(localnotes)
                console.log("Working")

                localnotes.forEach(
                    (localnotes) =>{ 
                        addingnote(localnotes)
                    }
                )

            }
        //  )()
        
        const addingnote = (text = "") => {
            const note = document.createElement("div");
            note.classList.add("note")
            note.innerHTML = `
            <div class="tool">
            <i class="save fa-solid fa-floppy-disk" style="color: #EDF2F4;"></i>
            <i class="trash fa-solid fa-trash" style="color: #EDF2F4;"></i>
            
            </div>
            <textarea placeholder="Type your note here...">${text}</textarea>
            `
            
            
note.querySelector(".trash").addEventListener(
    "click" , 
    function() {
        // deletenote()
        note.remove()
        savenotes();
    }
    )
    
    
    note.querySelector(".save").addEventListener(
        "click" ,
        function() {
            // console.log("working");
            savenotes();
        }
        )
        main.appendChild(note);
        savenotes();
        
    }