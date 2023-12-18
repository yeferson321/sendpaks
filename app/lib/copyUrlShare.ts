export const copyUrlShare = (text: string, setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
  const locationHref = window.location.href;

  const shareContent = {
    title: "Mira mi contenido exclusivo",
    text: text || "El mejor contenido lo encuentras en OnlyPack.com",
    url: locationHref,
  };

  if (navigator.share) return navigator.share(shareContent);

  navigator.clipboard.writeText(locationHref);

  setIsModalOpen(true);
  setTimeout(() => { setIsModalOpen(false) }, 4000);
};