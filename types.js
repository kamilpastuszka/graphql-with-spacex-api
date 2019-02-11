const typeDefs = `
type Launch {
    flight_number: Int,
    launch_year: Int,
    upcoming: Boolean,
}
type Query {
    getLaunches: [Launch]
}
`;

export default typeDefs;
