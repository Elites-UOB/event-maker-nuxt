import { acceptHMRUpdate,defineStore } from "pinia";

export const useEvents = defineStore("eventsStore", {
    state: () => ({
        events: []
    }),
    actions: {
        //get events
        async getEvents() {
            const supabase = useSupabaseClient();
            // const user = useSupabaseUser();
            try {
                const { data, error } = await supabase
                    .from("events")
                    .select("*")
                    // .eq("user_id", user.value?.id);
                    this.events.push(...<[]>data)
                    if (error) throw error;
            } catch (error) {
                console.log(error);
            }
        },
        async resetEvents() {
            this.events.length = 0;
        }
    }
});
// if (import.meta.hot) {
//     import.meta.hot.accept(acceptHMRUpdate(useEvents, import.meta.hot));
//   }