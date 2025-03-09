export function Skeleton({ children, ...props }) {
    return (
        <div className={"animate-pulse bg-gray-300 rounded " + props.className}>
        </div>
    );
}
