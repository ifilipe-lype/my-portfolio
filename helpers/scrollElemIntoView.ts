export default function scrollElemIntoView(componentId: string) {
  const element = document.getElementById(componentId) as HTMLElement;
  window.scrollTo({
    top: element?.offsetTop - 70,
    behavior: 'smooth',
  })
}
