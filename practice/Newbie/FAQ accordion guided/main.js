"use strict";
const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);
accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    //this parts checks if any part is opened, then checks if this is the same one we clicked if it's not then it closes it
    const activeAccordionItemHeader = document.querySelector(
      ".accordion-item-header.active"
    );
    if (
      activeAccordionItemHeader &&
      activeAccordionItemHeader !== accordionItemHeader
    ) {
      activeAccordionItemHeader.classList.toggle("active");
      activeAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }
    //this part adds active state to the header initiating opening of the accordion body element
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});
