import React from 'react'

interface CMSActionsProps {
  actionType: 'create' | 'update';
  editorType: "Blog" | "Package" | "Temple" | "Pooja";
  onSaveDraft: () => void;
  loading?: boolean;
}

const CMSActions = ({
  actionType, editorType,
<<<<<<< HEAD
  onPublish,
=======
   onSaveDraft,
>>>>>>> 925109d0358d53d7867f9fea42ebd69f7cb617fd
  loading = false,
}: CMSActionsProps) => {
  return (
    <div className="mt-10 flex gap-3 items-center">

      {/* Publish / Update */}
      
      <button
        type="submit"
        disabled={loading}
        className="px-6 py-2.5 rounded-lg text-sm font-medium
          bg-pink-600/20 text-pink-300 border border-pink-600/40
          hover:bg-pink-600/30 hover:border-pink-500/60 hover:text-pink-200
          transition active:scale-95 cursor-pointer
          disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {actionType === 'update' ? "Update" : "Publish"}
      </button>

       
      <button
        type="button"
        onClick={onSaveDraft}
        
        className="px-6 py-2.5 rounded-lg text-sm font-medium
        bg-pink-600/20 text-pink-300 border border-pink-600/40
        hover:bg-pink-600/30 hover:border-pink-500/60 hover:text-pink-200
        transition active:scale-95 cursor-pointer
        disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Save Draft
      </button>
    

      {/* Preview */}
     

      {/* Save Draft */}
<<<<<<< HEAD

      {
        actionType === "create" ? <> {onPublish && (
          <button
            type="button"
            onClick={onPublish}
            className="px-6 py-2.5 rounded-lg text-sm font-medium
            bg-pink-600/40 text-pink-50 border border-pink-400
            hover:bg-pink-950/60 hover:text-pink-300
            transition active:scale-95 cursor-pointer
            disabled:opacity-40"
          >
            Save Draft
          </button>
        )}</> : <></>
      }
=======
     
>>>>>>> 925109d0358d53d7867f9fea42ebd69f7cb617fd

      <span className="ml-auto text-xs text-pink-500/50 self-center">
        Editing {editorType}
      </span>

    </div>
  );
};

export default CMSActions;