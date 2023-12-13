export const copyUrlShare = (text: string) => {
  const locationHref = window.location.href || "onlypaks.com";

  if (navigator.share)
    return navigator.share({
      title: "Mira mi contenido exclusivo",
      text: text ? text : "El mejor contenido lo encuentras en OnlyPack.com",
      url: locationHref,
    });

  navigator.clipboard.writeText(locationHref);
};
