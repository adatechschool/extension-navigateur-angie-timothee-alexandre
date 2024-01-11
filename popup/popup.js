document.addEventListener('DOMContentLoaded', ()=>{
    const toggleSwitch = document.querySelector('#sex');

    chrome.storage.sync.get('isEnabled', (data)=>{
        toggleSwitch.checked = data.isEnabled || false;
    })

    toggleSwitch.addEventListener('change', ()=>{
        chrome.storage.sync.set({'isEnabled' : toggleSwitch.checked})
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.reload(tabs[0].id);
          });
    })
})