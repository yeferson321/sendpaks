'use client'

export const copyUrl = () => {
  const locationHref = window.location.href;
  if (navigator.clipboard) navigator.clipboard.writeText(locationHref);
};