// src/components/FXUltraLite.jsx
export default function FXUltraLite() {
    return (
        <>
            {/* Blob superior */}
            <div className="fixed inset-0 z-[-1] pointer-events-none">
                <div className="
                    absolute top-[-15%] left-[-10%] 
                    w-[60vw] h-[60vw] 
                    bg-blue-500/10 blur-[120px] rounded-full
                " />

                {/* Blob inferior */}
                <div className="
                    absolute bottom-[-20%] right-[-10%] 
                    w-[55vw] h-[55vw] 
                    bg-purple-500/10 blur-[120px] rounded-full
                " />
            </div>
        </>
    );
}
