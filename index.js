let activeIndex = 0;


const groups = document.getElementsByClassName("cards-group");

const handleLoveClick = () => {

  console.log("hate function called")

    const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
  

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
            nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = "after";

    nextGroup.dataset.status = "become-active-from-before";

    setTimeout(() => {
      nextGroup.dataset.status = "active";
      activeIndex = nextIndex;
    });

}

const handleHateClick = () => {

  console.log("love function called")

    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;
  
    console.log(nextIndex);

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
            nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

console.log(currentGroup+" "+nextGroup);

    currentGroup.dataset.status = "before";

    console.log(currentGroup.dataset.status);

    nextGroup.dataset.status = "become-active-from-after";

    console.log(nextGroup.dataset.status)

    setTimeout(() => {
      nextGroup.dataset.status = "active";
      activeIndex = nextIndex;
      console.log(activeIndex)
    });

}