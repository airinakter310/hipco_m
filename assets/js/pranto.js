
function FetchData() {

            var terVal = 90;
            var parent = document.querySelector(".TranslationViewCell_highlightedContainer__iR1i_ .TranslationText_translation-font-size-4__TKdKv");
            var classVal = document.querySelector('.TranslationViewCell_highlightedContainer__iR1i_ .TranslationText_translation-font-size-4__TKdKv .TranslationText_text__4atf8');
            var classValLeng = classVal.childNodes[0].length;
            var totalClass = parent.getElementsByClassName("TranslationText_text__4atf8").length;
            var totalStrLeng = (totalClass*classValLeng);
            var totalLoop = (terVal/classValLeng);
            var cusTerVal = terVal+totalStrLeng;

            for (let i = 0; i < totalLoop; i++) {
                if(totalStrLeng < terVal){

                    
                    const clone = classVal.cloneNode(true);
                    parent.appendChild(clone);
                    var totalClass = parent.getElementsByClassName("TranslationText_text__4atf8").length;
                    var totalStrLeng = (totalClass*classValLeng);
                }
            }

            var removeStr = (totalStrLeng-terVal);
            const i = parent.lastElementChild.innerHTML;
            var strLn = i.slice(0, -removeStr);
            parent.lastElementChild.innerHTML = strLn;

            const lastCh = parent.lastElementChild;
            const cloneLast = lastCh.cloneNode(true);
            parent.appendChild(cloneLast);
            
            setTimeout(function () {
                var select = parent;
                select.removeChild(select.lastElementChild);
            }, 1001);

        } 
        setInterval(FetchData, 1000);