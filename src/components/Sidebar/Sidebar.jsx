import NavLinks from "../NavLinks/NavLinks";

const Sidebar = ({handleOpen }) => {
    return (
        <section
            onClick={handleOpen}
            className={`w-64 bg-[#093553] border-r-4 border-[#052941] min-h-screen`}
        >
            <ul className="text-lg text-center py-14 space-y-4 text-white">
                <NavLinks></NavLinks>
            </ul>
        </section>
    );
};

export default Sidebar;