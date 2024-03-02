import Modal from 'react-modal';
import ExecutiveModifyForm from './ExecutiveModifyForm.tsx';

interface Props {
    id: number;
    year: number;
    name: string;
    studentId: string;
    role: string;
    isModalOpen: boolean;
    closeModal: () => void;
}

export default function ExecutiveModifyModal({ id, year, name, studentId, role, isModalOpen, closeModal }: Props) {
    return (
        <Modal
            isOpen={isModalOpen}
            style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 50%)', zIndex: 10 } }}
            className={
                'fixed left-1/2 top-1/2 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-gray-300 bg-white px-10 py-5'
            }
            closeTimeoutMS={280}
        >
            <h1 className={'mx-2 mb-6 text-xl font-semibold'}>임원 수정</h1>
            <ExecutiveModifyForm
                id={id}
                year={year}
                name={name}
                studentId={studentId}
                role={role}
                closeModal={closeModal}
            />
        </Modal>
    );
}
