type AlertProps = {
  message: string;
};

export default function ModalAlert({ message }: AlertProps) {
  return (
    <div className="fixed bottom-3 left-0 w-full flex justify-center items-center z-50">
      <div className="p-3 text-sm text-slate-100 rounded-lg bg-blue-500" role="alert">
        {message}
      </div>
    </div>
  )
};