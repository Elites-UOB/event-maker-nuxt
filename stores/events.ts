import { acceptHMRUpdate,defineStore } from "pinia";

export const useEvents = defineStore("events", {
    state: () => ({
        events: []
    }),
    actions: {
        //get events
        async getEvents() {
            const supabase = useSupabaseClient();
            const user = useSupabaseUser();
            try {
                const { data, error } = await supabase
                    .from("events")
                    .select("*")
                    .eq("user_id", user.value?.id);
                if (error) throw error;
                this.events = data;
            } catch (error) {
                console.log(error);
            }
        },
    }
});
// if (import.meta.hot) {
//     import.meta.hot.accept(acceptHMRUpdate(useEvents, import.meta.hot));
//   }