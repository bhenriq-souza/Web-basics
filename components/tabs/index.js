const tabs = document.querySelectorAll('li.tab');
const tabsContent = document.querySelectorAll('.tab-content');
const tabIndicator = document.querySelector('.tab-indicator');

tabs.forEach((tab, tabIndex) => {
  tab.addEventListener('click', e => {
        tabIndicator.style.left = `${e.target.offsetLeft}px`
    const isFirstTab = tabIndex === 0;
    const isLastTab = tabIndex === tabs.length - 1;
    if (isLastTab) {
          tabIndicator.classList.add('last');
    } else if(!isFirstTab) {
          tabIndicator.classList.add('center');
    }
        if (isFirstTab || isLastTab) {
          tabIndicator.classList.remove('center');
        }
        if (isFirstTab || !isLastTab) {
          tabIndicator.classList.remove('last');
        }
        tabs.forEach((tab, index) => {
          if (index === tabIndex ) {
            tab.classList.add('active');
          } else {
            tab.classList.remove('active');
          }
        });
        tabsContent.forEach((tabContent, tabContentIndex) => {
          if (tabContentIndex === tabIndex) {
            tabContent.classList.add('active');
          } else {
            tabContent.classList.remove('active');
          }
        })
  })
});