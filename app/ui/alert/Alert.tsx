type AlertProps = {
  showAlert: boolean;
};

export default function Alert({ showAlert }: AlertProps) {
  return (
    <>
      {showAlert && (
        <div className="fixed bottom-3.5 p-3 text-sm text-slate-100 rounded-lg bg-blue-500" role="alert">
          ¡El enlace al perfil se copió al portapapeles!
        </div>
      )}
    </>
  )
};