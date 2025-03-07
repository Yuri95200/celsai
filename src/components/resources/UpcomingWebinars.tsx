
import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

interface WebinarType {
  id: number;
  title: string;
  date: string;
  time: string;
  speaker: string;
}

interface UpcomingWebinarsProps {
  webinars: WebinarType[];
}

const UpcomingWebinars = ({ webinars }: UpcomingWebinarsProps) => {
  return (
    <section className="py-16">
      <Container>
        <div className="bg-blue-50 rounded-xl p-8 md:p-12">
          <div className="md:grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                Webinaires à venir
              </span>
              <h2 className="text-3xl font-bold mb-4">Participez à nos prochains webinaires en direct</h2>
              <p className="text-gray-600 mb-6">
                Inscrivez-vous à nos webinaires pour approfondir vos connaissances et poser vos questions à nos experts en temps réel.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white mb-6 md:mb-0">
                Voir tous les webinaires
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-4">
              {webinars.map((webinar) => (
                <div key={webinar.id} className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-lg mb-2">{webinar.title}</h3>
                      <div className="flex items-center text-gray-600 mb-1">
                        <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                        {webinar.date}, {webinar.time}
                      </div>
                      <p className="text-gray-600">{webinar.speaker}</p>
                    </div>
                    <Button size="sm" variant="outline" className="border-blue-200 hover:border-blue-400 hover:bg-blue-50">
                      S'inscrire
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default UpcomingWebinars;
